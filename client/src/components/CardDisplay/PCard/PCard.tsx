import React from "react";
import { Paper } from "@mui/material";
import Image from "next/image";
import styles from './pcard.module.css';

interface PCardProps {
  imgPath: string;
  id: string;
  desc: string;
}

const PCard: React.FC<PCardProps> = ({imgPath, id, desc}) => {
  return (
    <Paper className={styles.pcard} key={id} square={false} elevation={5}>
      <Image
        src={imgPath}
        width={250}
        height={350}
        alt={desc}
      />
    </Paper>
  )
}

export default PCard;