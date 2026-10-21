import { useState } from "react";

import { Button } from "@/components/ui/Button";

import { DonationDialog } from "../DonationDialog";

/** Botón «Donar ahora» y el diálogo que abre. */
export function DonationLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button aria-haspopup="dialog" onClick={() => setOpen(true)}>
        Donar ahora
      </Button>
      <DonationDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
