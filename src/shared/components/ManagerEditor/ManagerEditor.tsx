import { type ChangeEvent, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { useOffchain } from 'shared/hooks/useOffchain';

import { defaultParams } from './data';
import {
  ButtonWrapper,
  Line,
  Form,
  Wrapper,
  InputWrapper,
} from './ManagerEditor.styled';
import { type Props } from './types';
import fixedProtocol from '../../../../startProtocolParams';
import Button from '../Button/Button';
import Input from '../Input/Input';

const ManagerEditor = ({ onUpdatedSuccess, protocol }: Props) => {
  const [params, setParams] = useState(protocol);
  const offchain = useOffchain();

  useEffect(() => {
    setParams(protocol);
  }, [protocol]);

  const handleInputChange = (id, event) => {
    const { value } = event.target as HTMLInputElement;
    const dataType = String(event.target.getAttribute('data-type'));
    setParams({
      ...params,
      [dataType]: Number(value),
    });
  };

  const onUpdateProtocolComplete = (updatedParams) => {
    toast.success('Config was updated successfully');
    setParams(updatedParams);
    onUpdatedSuccess();
  };

  const onUpdateProtocolError = (error) => {
    toast.error(error);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    offchain?.updateProtocol(onUpdateProtocolComplete)(onUpdateProtocolError)(
      fixedProtocol
    )(params)();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          {defaultParams.map(({ title, id }) => (
            <Line key={id}>
              <Input
                onChange={(event) => {
                  handleInputChange(id, event);
                }}
                dataAttr={id}
                value={params[id]}
                title={title}
              />
            </Line>
          ))}
        </InputWrapper>
        <ButtonWrapper>
          <Button type="submit">Confirm</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default ManagerEditor;
