import KLottieAnimation from "../KLottieAnimation/KLottieAnimation";

export default function KLoadingPage() {
  return (
    <main className="w-full h-[100vh] flex items-center justify-center">
      <div style={{ width: 100, height: 100 }}>
        <KLottieAnimation animation="loading" size={100} />
      </div>
    </main>
  );
}
