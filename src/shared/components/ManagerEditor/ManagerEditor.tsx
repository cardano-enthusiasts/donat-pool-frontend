import { type ChangeEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useUpdateProtocol } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import { defaultParams } from './data';
import {
  ButtonWrapper,
  Line,
  Form,
  InputWrapper,
} from './ManagerEditor.styled';
import { type Props } from './types';
import { Button, Input } from '..';

const ManagerEditor = ({ config }: Props) => {
  const [params, setParams] = useState(config);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isInputsDisabled, setIsInputsDisabled] = useState(false);
  const { isRequesting } = useSelector(
    (state: AppReduxState) => state.protocol.communication.update
  );
  const updateProtocol = useUpdateProtocol();

  const filterInputValue = (value: string): '' | number => {
    if (Number(value) < 0) {
      return Number(-value);
    } else if (Number(value) >= 0) {
      return Number(value);
    }
    return '';
  };

  useEffect(() => {
    setIsSubmitDisabled(isRequesting);
    setIsInputsDisabled(isRequesting);
  }, [isRequesting]);

  useEffect(() => {
    setParams(config);
  }, [config]);

  const handleInputChange = (id, event) => {
    const { value } = event.target as HTMLInputElement;
    const dataType = String(event.target.getAttribute('data-type'));
    setIsSubmitDisabled(false);
    setParams({
      ...params,
      [dataType]: filterInputValue(value),
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateProtocol(params);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        {defaultParams.map(({ title, id, hint }) => (
          <Line key={id}>
            <Input
              onChange={(event) => {
                handleInputChange(id, event);
              }}
              dataAttr={id}
              value={params[id]}
              title={`${title} / ${hint}`}
              isDisabled={isInputsDisabled}
            />
          </Line>
        ))}
      </InputWrapper>
      <ButtonWrapper>
        <Button
          type="submit"
          isDisabled={isSubmitDisabled}
          width="100%"
          primaryColor="red"
          secondaryColor="blue"
        >
          Save
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export { ManagerEditor };
