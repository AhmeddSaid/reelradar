export default function Footer() {
  return (
    <div className="mt-20 flex items-center justify-center py-4">
      <p>
        &copy; {new Date().getFullYear()}
        <span className="text-primary"> Reel</span>Radar. All rights reserved.
      </p>
    </div>
  );
}
