export default function Header({ curentScore, bestScore }) {
  return (
    <>
      <h1>Anime Memory Card Game</h1>
      <section>
        <p>Current Score: {curentScore}</p>
        <p>Best Score: {bestScore}</p>
      </section>
    </>
  );
}
