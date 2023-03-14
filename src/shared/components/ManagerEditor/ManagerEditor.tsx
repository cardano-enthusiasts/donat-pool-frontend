import { type ChangeEvent, useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';

import { useUpdateProtocol } from 'shared/helpers/hooks';
import { theme } from 'shared/styles/theme';
import { type AppReduxState } from 'shared/types';

import { defaultParams } from './data';
import {
  ButtonWrapper,
  Line,
  Form,
  Wrapper,
  InputWrapper,
  Loader,
} from './ManagerEditor.styled';
import { type Props } from './types';
import { Button, Input } from '..';

const ManagerEditor = ({ config }: Props) => {
  const [params, setParams] = useState(config);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isInputsDisabled, setIsInputsDisabled] = useState(false);
  const { isRequesting } = useSelector(
    (state: AppReduxState) => state.info.communication.updateProtocol
  );

  useEffect(() => {
    if (isRequesting) {
      setIsSubmitDisabled(true);
      setIsInputsDisabled(true);
    } else {
      setIsSubmitDisabled(false);
      setIsInputsDisabled(false);
    }
  }, [isRequesting]);

  const updateProtocol = useUpdateProtocol();

  useEffect(() => {
    setParams(config);
  }, [config]);

  const handleInputChange = (id, event) => {
    const { value } = event.target as HTMLInputElement;
    const dataType = String(event.target.getAttribute('data-type'));
    setIsSubmitDisabled(false);
    setParams({
      ...params,
      [dataType]: Number(value),
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateProtocol(params);
  };

  return (
    <Wrapper>
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
                title={title}
                isDisabled={isInputsDisabled}
                hint={hint}
              />
            </Line>
          ))}
        </InputWrapper>
        <ButtonWrapper>
          <Button type="submit" isDisabled={isSubmitDisabled}>
            Confirm
          </Button>
        </ButtonWrapper>
        <Loader isLoading={isRequesting}>
          {isRequesting && (
            <ReactLoading color={theme.colors.secondary} height={40} />
          )}
        </Loader>
      </Form>
    </Wrapper>
  );
};

export { ManagerEditor };
