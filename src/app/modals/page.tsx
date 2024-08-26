"use client";

import { useState } from "react";
import {
  Button,
  DateTimePicker,
  DatetimePickerLabel,
  Modal,
  SelectBadge,
  SelectSearch,
} from "../../../../design-system/components";

export default function Page() {
  const [openModal, setOpenModal] = useState(false);
  const [openEnableBackdropCloseModal, setOpenEnableBackdropCloseModal] =
    useState(false);
  const [openFooterModal, setOpenFooterModal] = useState(false);
  const [openHeaderModal, setOpenHeaderModal] = useState(false);
  const [openDatepickerModal, setOpenDatepickerModal] = useState(false);
  const [openDatepickerLabelModal, setOpenDatepickerLabelModal] =
    useState(false);
  const [openSelectModal, setOpenSelectModal] = useState(false);

  return (
    <>
      <div className="flex w-full flex-wrap gap-3">
        <Button.Root variant="primary" onClick={() => setOpenModal(true)}>
          Modal normal
        </Button.Root>
        <Button.Root
          variant="primary"
          onClick={() => setOpenDatepickerModal(true)}
        >
          DatetimePicker
        </Button.Root>
        <Button.Root
          variant="primary"
          onClick={() => setOpenDatepickerLabelModal(true)}
        >
          DatetimePickerLabel
        </Button.Root>
        <Button.Root
          variant="primary"
          onClick={() => setOpenEnableBackdropCloseModal(true)}
        >
          Modal Enable Backdrop Close
        </Button.Root>
        <Button.Root variant="primary" onClick={() => setOpenHeaderModal(true)}>
          Modal Header
        </Button.Root>
        <Button.Root variant="primary" onClick={() => setOpenFooterModal(true)}>
          Modal Footer
        </Button.Root>
        <Button.Root variant="primary" onClick={() => setOpenSelectModal(true)}>
          select
        </Button.Root>
      </div>
      <Modal.Root
        enableBackdropClose={false}
        open={openDatepickerModal}
        onClose={setOpenDatepickerModal}
      >
        <Modal.Body>
          <DateTimePicker />
        </Modal.Body>
      </Modal.Root>
      <Modal.Root
        enableBackdropClose={false}
        open={openDatepickerLabelModal}
        onClose={setOpenDatepickerLabelModal}
      >
        <Modal.Body>
          <DatetimePickerLabel label="Data" />
        </Modal.Body>
      </Modal.Root>
      <Modal.Root open={openModal} onClose={setOpenModal}>
        <Modal.Body>Modal Normal</Modal.Body>
      </Modal.Root>
      <Modal.Root
        open={openEnableBackdropCloseModal}
        onClose={setOpenEnableBackdropCloseModal}
        enableBackdropClose={false}
      >
        <Modal.Body>Modal Enable Backdrop Close</Modal.Body>
      </Modal.Root>
      <Modal.Root
        enableBackdropClose={false}
        open={openHeaderModal}
        onClose={setOpenHeaderModal}
      >
        <Modal.Header title="Header Title">Alguma coisa qualquer</Modal.Header>
        <Modal.Body>Modal Header</Modal.Body>
        <Modal.Footer>
          <Modal.ActionButtons />
        </Modal.Footer>
      </Modal.Root>
      <Modal.Root
        enableBackdropClose={false}
        open={openFooterModal}
        onClose={setOpenFooterModal}
      >
        <Modal.Body>Modal Footer</Modal.Body>
        <Modal.Footer>
          <Modal.ActionButtons />
        </Modal.Footer>
      </Modal.Root>

      <Modal.Root open={openSelectModal} onClose={setOpenSelectModal}>
        <Modal.Body>
          Select
          <SelectBadge
            type="default"
            badge="Bade"
            items={[
              { id: "1", name: "John" },
              { id: "2", name: "Jane" },
            ]}
            fieldValue="id"
            fieldLabel="name"
          />
          <SelectSearch
            modal
            items={[
              { id: "1", name: "John" },
              { id: "2", name: "Jane" },
            ]}
            fieldValue="id"
            fieldLabel="name"
          />
        </Modal.Body>
      </Modal.Root>
    </>
  );
}
