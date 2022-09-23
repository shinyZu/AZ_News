import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import styles from "./CardTag.module.css";

function CardTag(props) {
  return (
    <>
      <Grid
        container
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={styles.card__tag__container}
        direction="column"
        justifyContent="flex-end"
      >
        {props.displayStatus && (
          <Chip
            label={props.category}
            size="small"
            style={{
              width: "fit-content",
              color: "white",
              border: `1px solid ${props.chip_color}`,
              backgroundColor: `${props.chip_color}`,
              marginBottom: "2%",
              borderRadius: "5px",
            }}
          />
        )}

        <Typography variant="h5" className={styles.tag_text}>
          {props.headline}
        </Typography>
        <Typography variant="h7" className={styles.tag_text}>
          {props.date}
        </Typography>
      </Grid>
    </>
  );
}

export default CardTag;
