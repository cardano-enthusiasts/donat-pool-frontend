'use client';

import { type ChangeEvent, useState, useEffect } from 'react';

import { reset } from '@/redux/slices/protocolUpdating';
import { Input, ModalError, ModalLoading, ModalSuccess, StandardButton } from '@/shared/components';
import { useAppDispatch, useAppSelector, useUpdateProtocol } from '@/shared/hooks';

import { DEFAULT_PARAMS } from './data';
import { Props } from './types';

function ManagerEditor({ config }: Props) {
  const [params, setParams] = useState(config);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalLoadingOpen, setIsModalLoadingOpen] = useState(false);
  const dispatch = useAppDispatch();

  const { error, status } = useAppSelector((state) => state.protocolUpdating);
  const setProtocol = useUpdateProtocol();

  function filterInputValue(value: string): '' | number {
    if (Number(value) < 0) {
      return Number(-value);
    } else if (Number(value) >= 0) {
      return Number(value);
    }
    return '';
  }

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

  function handleInputChange(event: any) {
    const { value } = event.target as HTMLInputElement;
    const dataType = String(event.target.getAttribute('data-type'));

    setParams({
      ...params,
      [dataType]: filterInputValue(value),
    });
  }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setProtocol(params);
  }

  function handleErrorModalClose() {
    setIsModalErrorOpen(false);
    dispatch(reset());
  }

  function handleSuccessModalClose() {
    setIsModalSuccessOpen(false);
    dispatch(reset());
  }

  return (
    <>
      <form className="w-full max-w-[52.5rem]" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {DEFAULT_PARAMS.map(({ title, id, hint }) => (
            <div className="flex w-full items-center justify-between" key={id}>
              <Input type="number" value={params[id]} dataAttr={id} onChange={handleInputChange}>
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
      <ModalLoading opened={isModalLoadingOpen} title="Data saving" description="Please wait a bit" />
      <ModalError
        opened={isModalErrorOpen}
        title="Management contract"
        errorText={error}
        onClose={handleErrorModalClose}
      />
      <ModalSuccess opened={isModalSuccessOpen} description="All data saved" onClose={handleSuccessModalClose} />
    </>
  );
}

export default ManagerEditor;
