import { useState } from 'react';

import { defaultParams } from './data';
import { ItemTitle, Line, Form, Wrapper, Title } from './ManagerEditor.styled';
import Button from '../Button/Button';
import Input from '../Input/Input';

const ManagerEditor = () => {
  const [params, setParams] = useState({
    minAmountParam: '',
    maxAmountParam: '',
    minDurationParam: '',
    maxDurationParam: '',
    protocolFeeParam: '',
  });

  const handleInputChange = (id, event) => {
    const { value } = event.target as HTMLInputElement;
    const dataType = String(event.target.getAttribute('data-type'));
    console.log(id, value);

    setParams({
      ...params,
      [dataType]: value,
    });
  };

  const handleSubmit = () => {
    console.log(params);
  };

  return (
    <Wrapper>
      <Title>Management contract</Title>
      <Form onSubmit={handleSubmit}>
        {defaultParams.map(({ title, id }) => (
          <Line key={id}>
            <ItemTitle>{title}</ItemTitle>
            <Input
              onChange={(event) => {
                handleInputChange(id, event);
              }}
              dataAttr={id}
              value={params[id]}
            />
          </Line>
        ))}
        <Button type="submit">Confirm</Button>
      </Form>
    </Wrapper>
  );
};

export default ManagerEditor;
