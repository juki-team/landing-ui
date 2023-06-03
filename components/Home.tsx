import { GmailIcon, HeadsetMicIcon, LoadingIcon, PhoneIcon, T, TelegramIcon } from 'components';
import { useRouter } from 'hooks';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function Home() {
  
  const router = useRouter();
  const apps = [
    {
      name: 'Juki Judge App',
      image: 'https://images.juki.pub/c/juki-judge-logo-horizontal-color.svg',
      developing: false,
      description: '',
      href: 'https://judge.juki.app' + router.asPath,
    },
    {
      name: 'Juki Coach App',
      image: 'https://images.juki.pub/c/juki-head.svg',
      developing: true,
      description: '',
      href: '#',
    },
    {
      name: 'Juki Utils App',
      image: 'https://images.juki.pub/c/juki-head.svg',
      developing: true,
      description: '',
      href: '#',
    },
  ];
  
  return (
    <div className="jk-col top nowrap extend stretch bc-py">
      <Head>
        <title>Juki App</title>
        <meta name="description" content="Juki App" />
        <link rel="icon" href="/juki-head-ico.png" />
      </Head>
      <div style={{ flex: 1 }} className="jk-col center stretch">
        <div className="jk-row jk-pad-lg">
          <h1 style={{ color: 'var(--t-color-white)' }}>Juki App</h1>
        </div>
        
        <div className="jk-row gap jk-pad-lg">
          {apps.map(app => (
            <Link href={app.href} key={app.name}>
              <div
                className="jk-col center jk-pad-lg jk-border-radius jk-shadow bc-we app-card"
                style={{ width: 320, height: 300 }}
              >
                <div className="jk-row"><Image src={app.image} alt={app.name} height={80} width={160} /></div>
                <div className="jk-row"><h2>{app.name}</h2></div>
                <div className="jk-row center">
                  {app.developing
                    ? <><LoadingIcon size="small" /> <T className="tt-se">developing</T>...</>
                    : <Link href={app.href}>
                      <div className="link cursor-pointer wb-bw">{app.href}</div>
                    </Link>}
                </div>
                <div className="jk-row"><p>{app.description}</p></div>
              
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="jk-col jk-pad-lg cr-we">
        <div className="jk-divider" />
        <div className="jk-row"><HeadsetMicIcon /><T className="tt-ue tx-s fw-bd">need help?</T></div>
        <div className="jk-row center fw-bd"><T className="tt-se">contact the webmaster</T>:</div>
        <div className="jk-row gap center">
          <TelegramIcon />
          <div className="jk-row link fw-bd" style={{ width: 250 }}>
            <Link href="https://t.me/OscarGauss" target="_blank">t.me/OscarGauss</Link>
          </div>
        </div>
        <div className="jk-row gap center">
          <PhoneIcon />
          <div className="jk-row fw-bd" style={{ width: 250 }}>+591 79153358</div>
        </div>
        <div className="jk-row gap center">
          <GmailIcon />
          <div className="jk-row fw-bd" style={{ width: 250 }}>contact@juki.app</div>
        </div>
      </div>
    </div>
  );
}
