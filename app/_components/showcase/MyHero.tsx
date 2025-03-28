const MyHero = () => {
  const spanStyle = "capitalize text-green-600";
  return (
    <div>
      <h1 className="text-3xl font-semibold text-[--text-color-secondary]">
        Hello 👋 I’m Ronie! I specialize in{" "}
        <span className={spanStyle}>website development </span>
        with a sharp focus on <span className={spanStyle}>UI </span>and{" "}
        <span className={spanStyle}>UX design</span>.
      </h1>
    </div>
  );
};
export default MyHero;
