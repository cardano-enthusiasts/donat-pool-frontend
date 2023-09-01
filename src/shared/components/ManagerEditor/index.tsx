'use client';

import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { reset } from '@/redux/slices/protocolUpdating';
import { Input, ModalError, ModalLoading, ModalSuccess, StandardButton } from '@/shared/components';
import { useUpdateProtocol } from '@/shared/hooks';

import { DEFAULT_PARAMS } from './data';
import type { Props } from './types';

function ManagerEditor({ config }: Props) {
  const [params, setParams] = useState(config);
  const [modalSuccessIsShown, setModalSuccessIsShown] = useState(false);
  const [modalErrorIsShown, setModalErrorIsShown] = useState(false);
  const [modalLoadingIsShown, setModalLoadingIsShown] = useState(false);
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
      setModalSuccessIsShown(true);
    }
    if (status === 'error') {
      setModalErrorIsShown(true);
    }
  }, [status]);

  useEffect(() => {
    setModalLoadingIsShown(status === 'requesting');
  }, [status]);

  useEffect(() => {
    setParams(config);
  }, [config]);

  function handleInputChange(event: React.ChangeEvent<Element>) {
    const { value } = event.target as HTMLInputElement;
    const dataType = String(event.target.getAttribute('data-type'));

    setParams({
      ...params,
      [dataType]: filterInputValue(value),
    });
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setProtocol(params);
  }

  function handleErrorModalClose() {
    setModalErrorIsShown(false);
    dispatch(reset());
  }

  function handleSuccessModalClose() {
    setModalSuccessIsShown(false);
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
      <ModalLoading shown={modalLoadingIsShown} title="Data saving" description="Please wait a bit" />
      <ModalError
        shown={modalErrorIsShown}
        title="Management contract"
        errorText={error}
        onClose={handleErrorModalClose}
      />
      <ModalSuccess shown={modalSuccessIsShown} description="All data saved" onClose={handleSuccessModalClose} />
    </>
  );
}

export default ManagerEditor;
