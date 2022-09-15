import {Button, Panel, Select, Textarea} from '@navikt/ds-react';
import { useState } from "react";
import styles from "./BeskjedPanel.module.css";

export const BeskjedPanel = () => {
  const [tekst, setTekst] = useState("Skriv inn tekst");
  const [lenke, setLenke] = useState("Skriv inn lenke");

  const createBeskjed = async () => {
    await fetch("/api/beskjed", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        tekst,
        lenke,
      }),
    });
  };

  return (
    <Panel>
      <div className={styles.content}>
        <Textarea
          label="Tekst"
          value={tekst}
          onChange={e => setTekst(e.target.value)}
          size="small"
        />
      </div>
      <div className={styles.content}>
        <Textarea
          label="Lenke"
          value={lenke}
          onChange={e => setLenke(e.target.value)}
          size="small"
        />
      </div>
      <div className={styles.content}>
        <Select
          label="Ekstern varsling"
          size="medium"
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </Select>
      </div>
      <div className={styles.content}>
        <Button variant="secondary">Opprett</Button>
      </div>
    </Panel>
  );
};
