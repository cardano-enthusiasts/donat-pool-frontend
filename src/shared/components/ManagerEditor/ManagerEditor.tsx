import { type ChangeEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from 'core/hooks';
import { setError, setStatus } from 'core/slices/protocolUpdating';
import { useUpdateProtocol } from 'shared/helpers/hooks';

import { defaultParams } from './data';
import {
  ButtonWrapper,
  Line,
  Form,
  InputWrapper,
  Hint,
} from './ManagerEditor.styled';
import { type Props } from './types';
import { Button, Input, ModalError, ModalLoading, ModalSuccess } from '..';

const ManagerEditor = ({ config }: Props) => {
  const [params, setParams] = useState(config);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalLoadingOpen, setIsModalLoadingOpen] = useState(false);
  const dispatch = useDispatch();

  const { error, status } = useAppSelector((state) => state.protocolUpdating);
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
    if (status === 'success') {
      setIsModalSuccessOpen(true);
    }
    if (status === 'error') {
      setIsModalErrorOpen(true);
    }
  }, [status]);

  useEffect(() => {
    setIsModalLoadingOpen(status === 'requesting');
  }, [status]);

  useEffect(() => {
    setParams(config);
  }, [config]);

  const handleInputChange = (id, event) => {
    const { value } = event.target as HTMLInputElement;
    const dataType = String(event.target.getAttribute('data-type'));

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
    <>
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
                type="number"
              >
                {title} / <Hint>{hint}</Hint>
              </Input>
            </Line>
          ))}
        </InputWrapper>
        <ButtonWrapper>
          <Button
            type="submit"
            width="100%"
            primaryColor="red"
            secondaryColor="blue"
            fontColor="white"
          >
            Save
          </Button>
        </ButtonWrapper>
      </Form>
      <ModalLoading
        isOpen={isModalLoadingOpen}
        title="Data saving"
        description="Please wait a bit"
      />
      <ModalError
        isOpen={isModalErrorOpen}
        title="Management contract"
        errorText={error}
        onClose={() => {
          setIsModalErrorOpen(false);
          dispatch(setError(null));
        }}
      />
      <ModalSuccess
        isOpen={isModalSuccessOpen}
        description="All data saved"
        onClose={() => {
          setIsModalSuccessOpen(false);
          dispatch(setStatus('default'));
        }}
      />
    </>
  );
};

export { ManagerEditor };
