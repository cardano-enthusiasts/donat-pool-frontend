import { type ChangeEvent, useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import { useUpdateProtocol } from 'shared/helpers/hooks';
import { theme } from 'shared/styles/theme';

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

const ManagerEditor = ({ onUpdatedSuccess, onUpdatedError, config }: Props) => {
  const [params, setParams] = useState(config);
  const handleUpdateProtocolSuccess = () => {
    onUpdatedSuccess();
    setIsLoading(false);
    setIsSubmitDisabled(false);
    setIsInputsDisabled(false);
  };
  const handleUpdateProtocolError = () => {
    setIsLoading(false);
    onUpdatedError();
    setIsSubmitDisabled(false);
    setIsInputsDisabled(false);
  };
  const updateProtocol = useUpdateProtocol(
    handleUpdateProtocolSuccess,
    handleUpdateProtocolError
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isInputsDisabled, setIsInputsDisabled] = useState(false);

  useEffect(() => {
    setParams(config);
  }, [config]);

  useEffect(() => {
    if (isLoading) {
      setIsSubmitDisabled(true);
      setIsInputsDisabled(true);
    }
  }, [isLoading]);

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
    updateProtocol(params)();
    setIsLoading(true);
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
        <Loader isLoading={isLoading}>
          {isLoading && (
            <ReactLoading color={theme.colors.secondary} height={40} />
          )}
        </Loader>
      </Form>
    </Wrapper>
  );
};

export { ManagerEditor };
