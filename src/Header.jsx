export default function Header({ curentScore, bestScore }) {
  return (
    <>
      <h1>Memory Card Game</h1>
      <section>
        <p>Current Score: {curentScore}</p>
        <p>Best Score: {bestScore}</p>
      </section>
    </>
  );
}
