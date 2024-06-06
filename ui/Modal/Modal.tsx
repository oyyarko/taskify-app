import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React from "react";
import { Button } from "../Button/button";

type ModalProps = {
  isOpen: boolean;
  handleOnSubmit?: () => void;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose, ...rest }: ModalProps) => {
  return (
    <Transition show={isOpen}>
      <Dialog onClose={onClose} className="relative z-50">
        <TransitionChild
          enter="transition-all ease-out duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800/80 dark:bg-black/80 transition-all ease-out duration-700" />
        </TransitionChild>
        <TransitionChild
          enter="transition-all ease-out duration-700"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition-all ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 dark:bg-slate-800 bg-white text-black dark:text-white shadow-lg rounded-3xl p-12">
              <DialogTitle className="text-lg font-bold">
                Deactivate account
              </DialogTitle>
              <Description>
                This will permanently deactivate your account
              </Description>
              <p>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed.
              </p>
              <div className="flex gap-4">
                <Button onClick={onClose}>Deactivate</Button>
                <Button onClick={onClose} className="!border-amber-500 border-2  text-black dark:text-white hover:text-black dark:hover:text-white !bg-transparent">
                  Cancel
                </Button>
              </div>
            </DialogPanel>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};

export default Modal;
