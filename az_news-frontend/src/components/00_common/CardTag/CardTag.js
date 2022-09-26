import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import styles from "./CardTag.module.css";

/** Left bottom card tag of News Card with Headline & Date on it */
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
            className={styles.chip__text}
            style={{
              border: `1px solid ${props.chip_color}`,
              backgroundColor: `${props.chip_color}`,
            }}
          />
        )}

        <Typography variant="h5" className={styles.headline_text}>
          {props.headline}
        </Typography>
        <Typography variant="h7" className={styles.date_text}>
          {props.date}
        </Typography>
      </Grid>
    </>
  );
}

export default CardTag;
