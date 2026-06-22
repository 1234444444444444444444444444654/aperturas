import { Hash, Clock, Users, Trophy } from 'lucide-react';
import type { Stats } from '@/app/page';
import styles from './KpiGrid.module.css';

function fmtDuration(min: number) {
  if (min < 60) return `${min}m`;
  return `${Math.floor(min / 60)}h ${min % 60}m`;
}

type KpiItem = {
  label: string;
  value: string;
  sub: string;
  icon: React.ReactNode;
  accent: string;
};

export default function KpiGrid({ stats }: { stats: Stats }) {
  const items: KpiItem[] = [
    {
      label: 'Sesiones Totales',
      value: stats.totalSessions.toString(),
      sub: 'aperturas registradas',
      icon: <Hash size={20} />,
      accent: 'blue',
    },
    {
      label: 'Duración Media',
      value: fmtDuration(stats.avgDuration),
      sub: 'por sesión',
      icon: <Clock size={20} />,
      accent: 'green',
    },
    {
      label: 'Votantes Medios',
      value: stats.avgVotes.toString(),
      sub: 'jugadores por apertura',
      icon: <Users size={20} />,
      accent: 'amber',
    },
    {
      label: 'Sesión Más Larga',
      value: fmtDuration(stats.maxDuration),
      sub: 'récord histórico',
      icon: <Trophy size={20} />,
      accent: 'purple',
    },
  ];

  return (
    <div className={styles.grid}>
      {items.map(item => (
        <div key={item.label} className={`${styles.card} ${styles[`accent_${item.accent}`]}`}>
          <div className={styles.iconWrap}>
            {item.icon}
          </div>
          <div className={styles.body}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.sub}>{item.sub}</span>
          </div>
          <div className={styles.glow} />
        </div>
      ))}
    </div>
  );
}
