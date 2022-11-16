import { Button, Panel, Select, Textarea } from '@navikt/ds-react';
import ReactConfetti from "https://cdn.skypack.dev/react-confetti";
import { useState } from "react";
import {get, postUtkast, postVarsel} from "../../../lib/api/postVarsel";
import {useConfetti, useShortConfetti} from "../../../hooks/useConfetti";
import styles from "./UtkastPanel.module.css";

export const UtkastPanel = () => {
  const [tittel, setTittel] = useState("Skriv inn tekst");
  const [lenke, setLenke] = useState("Skriv inn lenke");
  const [eventId, setEventId] = useState("Skriv inn eventId");
  const [confetti, renderConfetti] = useConfetti();
  const [shortConfetti, renderShortConfetti] = useShortConfetti();

  const createUtkast = async () => {
    await postUtkast("create", {
      eventId: eventId,
      tittel: tittel,
      link: lenke,
    });

    await renderConfetti();
  };

  const updateUtkast = async () => {
    await postUtkast("update", {
      eventId: eventId,
      tittel: tittel,
      link: lenke,
    });

    await renderShortConfetti();
  };

  const deleteUtkast = async () => {
    await postUtkast("delete", {
      eventId: eventId
    });

    await renderShortConfetti();
  };

  const generateUUID = async () => {
      await get("uuid/generate")
          .then(value => value.text())
          .then(uuid => setEventId(uuid))
  }

  const generateULID = async () => {
      await get("ulid/generate")
          .then(value => value.text())
          .then(ulid => setEventId(ulid))
  }

  return (
    <Panel className={styles.utkastpanel}>
      {confetti ? <ReactConfetti /> : null}
      <div className={styles.content}>
        <Textarea
          label="EventId"
          value={eventId}
          onChange={e => setEventId(e.target.value)}
          size="small"
        />
          <Button variant="secondary" onClick={generateUUID}>UUID</Button>
          <Button variant="secondary" onClick={generateULID}>ULID</Button>
      </div>
      <div className={styles.content}>
          <Textarea
              label="Tittel"
              value={tittel}
              onChange={e => setTittel(e.target.value)}
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
        <Button variant="secondary" onClick={createUtkast}>Opprett</Button>
        <Button variant="secondary" onClick={updateUtkast}>Oppdater</Button>
        <Button variant="secondary" onClick={deleteUtkast}>Slett</Button>
      </div>
    </Panel>
  );
};
