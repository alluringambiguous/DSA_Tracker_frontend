import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function StarRating(props) {
  const stars = Array(5).fill(0);

  return (
    <div style={styles.stars}>
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={24}
            color={props.currentValue > index ? colors.orange : colors.grey}
            style={{
              marginRight: 0,
              cursor: "pointer",
            }}
          />
        );
      })}
    </div>
  );
}

const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};

export default StarRating;
