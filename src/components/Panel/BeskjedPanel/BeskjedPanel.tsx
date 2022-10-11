import { Button, Panel, Select, Textarea } from '@navikt/ds-react';
import { useState } from "react";
import ReactConfetti from "https://cdn.skypack.dev/react-confetti";
import { post } from "../../../lib/api/post";
import { toBoolean } from "../../../lib/utils/string";
import { useConfetti } from "../../../hooks/useConfetti";
import styles from "./BeskjedPanel.module.css";

export const BeskjedPanel = () => {
  const [tekst, setTekst] = useState("Skriv inn tekst");
  const [lenke, setLenke] = useState("Skriv inn lenke");
  const [eksternVarsling, setEksternVarsling] = useState("false");
  const [confetti, renderConfetti] = useConfetti();

  const createBekjed = async () => {
    await post("beskjed", {
      tekst: tekst,
      link: lenke,
      eksternVarsling: toBoolean(eksternVarsling),
      synligFremTil: null,
    });

    await renderConfetti();
  };

  return (
    <Panel className={styles.beskjedpanel}>
      {confetti ? <ReactConfetti /> : null}
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
          onChange={(e) => setEksternVarsling(e.target.value)}
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </Select>
      </div>
      <div className={styles.content}>
        <Button variant="secondary" onClick={createBekjed}>Opprett</Button>
      </div>
    </Panel>
  );
};
