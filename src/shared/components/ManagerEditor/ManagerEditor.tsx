import { type ChangeEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

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
  const updateProtocol = useUpdateProtocol();

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
          <BeatLoader
            color={theme.colors.secondary}
            loading={isRequesting}
            size={20}
            aria-label="Loading beat"
            data-testid="loader"
          />
        </Loader>
      </Form>
    </Wrapper>
  );
};

export { ManagerEditor };
