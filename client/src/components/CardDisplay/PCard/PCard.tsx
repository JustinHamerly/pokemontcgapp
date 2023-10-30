import React from "react";
import { Paper, Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Image from "next/image";
import styles from './pcard.module.css';

interface PCardProps {
  imgPath: string;
  id: string;
  desc: string;
}

const PCard: React.FC<PCardProps> = ({ imgPath, id, desc }) => {
  return (
    <Paper className={styles.pcard} key={id} square={false} elevation={2}>
      <Image
        src={imgPath}
        width={125}
        height={175}
        alt={desc}
        className={styles.img}
      />
      <div className={styles.cardButtons}>
        <Button color="primary"><AddCircleIcon /></Button>
        <Button color="primary"><RemoveCircleIcon /></Button>
      </div>

    </Paper>
  )
}

export default PCard;