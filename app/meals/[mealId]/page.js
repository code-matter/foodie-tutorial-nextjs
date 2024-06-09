import React from "react";

const MealIDPage = ({ params }) => {
  return (
    <div>
      <h1>MealIDPage: {params?.mealId}</h1>
    </div>
  );
};

export default MealIDPage;
