import { type ChangeEvent, useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';

import { useOffchain } from 'shared/hooks/useOffchain';
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
import fixedProtocol from '../../../../startProtocolParams';
import Button from '../Button/Button';
import Input from '../Input/Input';

const ManagerEditor = ({
  onUpdatedSuccess,
  onUpdatedError,
  protocol,
}: Props) => {
  const [params, setParams] = useState(protocol);
  const offchain = useOffchain();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isInputsDisabled, setIsInputsDisabled] = useState(false);

  useEffect(() => {
    setParams(protocol);
  }, [protocol]);

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

  const onUpdateProtocolComplete = (updatedParams) => {
    toast.success('Config was updated successfully');
    setParams(updatedParams);
    onUpdatedSuccess();
    setIsLoading(false);
    setIsSubmitDisabled(false);
    setIsInputsDisabled(false);
  };

  const onUpdateProtocolError = (error) => {
    toast.error(error);
    setIsLoading(false);
    onUpdatedError();
    setIsSubmitDisabled(false);
    setIsInputsDisabled(false);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    offchain?.updateProtocol(onUpdateProtocolComplete)(onUpdateProtocolError)(
      fixedProtocol
    )(params)();
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

export default ManagerEditor;
