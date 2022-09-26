import Chip from "@mui/material/Chip";
import styles from "./CardTag.module.css";

function CategoryChip(props) {
  return (
    <>
      <Chip
        label={props.label}
        size="small"
        className={styles.chip__text}
        style={props.style}
      />
    </>
  );
}

export default CategoryChip;
