import { type ChangeEvent, useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { reset } from '@/redux/slices/protocolUpdating';
import { useUpdateProtocol } from '@/shared/hooks';

import { DEFAULT_PARAMS } from './data';
import type { Props } from './types';
import { Input, ModalError, ModalLoading, ModalSuccess, StandardButton } from '..';

const ManagerEditor = ({ config }: Props) => {
  const [params, setParams] = useState(config);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalLoadingOpen, setIsModalLoadingOpen] = useState(false);
  const dispatch = useAppDispatch();

  const { error, status } = useAppSelector((state) => state.protocolUpdating);
  const setProtocol = useUpdateProtocol();

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

  const handleInputChange: (id: any, event: any) => void = (id, event) => {
    const { value } = event.target as HTMLInputElement;
    const dataType = String(event.target.getAttribute('data-type'));

    setParams({
      ...params,
      [dataType]: filterInputValue(value),
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProtocol(params);
  };

  return (
    <>
      <form className="w-full max-w-[52.5rem]" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {DEFAULT_PARAMS.map(({ title, id, hint }) => (
            <div className="flex w-full items-center justify-between" key={id}>
              <Input
                onChange={(event) => {
                  handleInputChange(id, event);
                }}
                dataAttr={id}
                value={params[id]}
                type="number"
              >
                {title} / <span className="text-gray">{hint}</span>
              </Input>
            </div>
          ))}
        </div>
        <div className="mt-5 flex w-full content-center">
          <StandardButton type="submit" isFullWidth primaryColor="red" secondaryColor="blue" fontColor="white">
            Save
          </StandardButton>
        </div>
      </form>
      <ModalLoading isOpen={isModalLoadingOpen} title="Data saving" description="Please wait a bit" />
      <ModalError
        isOpen={isModalErrorOpen}
        title="Management contract"
        errorText={error}
        onClose={() => {
          setIsModalErrorOpen(false);
          dispatch(reset());
        }}
      />
      <ModalSuccess
        isOpen={isModalSuccessOpen}
        description="All data saved"
        onClose={() => {
          setIsModalSuccessOpen(false);
          dispatch(reset());
        }}
      />
    </>
  );
};

export { ManagerEditor };
