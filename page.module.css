.main {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

.content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px 80px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

@media (max-width: 900px) {
  .row { grid-template-columns: 1fr; }
  .content { padding: 0 16px 60px; }
}

.loader {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  color: var(--muted);
  font-family: var(--font-data);
}

.loaderInner {
  display: flex;
  gap: 8px;
}

.loaderDot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--blue);
  animation: pulse 1.2s ease-in-out infinite;
}

.loaderDot:nth-child(2) { animation-delay: 0.2s; }
.loaderDot:nth-child(3) { animation-delay: 0.4s; }

@keyframes pulse {
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
  40% { opacity: 1; transform: scale(1); }
}
