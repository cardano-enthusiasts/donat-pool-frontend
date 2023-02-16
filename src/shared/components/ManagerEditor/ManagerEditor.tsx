import { type ChangeEvent, useState } from 'react';

import { defaultParams } from './data';
import {
  ButtonWrapper,
  Line,
  Form,
  Wrapper,
  InputWrapper,
} from './ManagerEditor.styled';
import Button from '../Button/Button';
import Input from '../Input/Input';

const ManagerEditor = () => {
  const [params, setParams] = useState({
    minAmountParam: 50000000,
    maxAmountParam: 1000000000,
    minDurationParam: 100,
    maxDurationParam: 1000,
    protocolFeeParam: 10,
  });

  const handleInputChange = (id, event) => {
    const { value } = event.target as HTMLInputElement;
    const dataType = String(event.target.getAttribute('data-type'));
    setParams({
      ...params,
      [dataType]: Number(value),
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(params);
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
