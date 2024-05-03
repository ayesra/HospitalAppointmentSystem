import { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
import { doktorData, hastaData } from "../helper/Data";

const Home = () => {
  const [hastalar, setHastalar] = useState(hastaData);
  const [doktorlar, setDoktorlar] = useState(doktorData);
  const [tikla, setTikla] = useState(true);

  const doktorClick = (abc) => {
    if (tikla) {
      setTikla(false);
      setDoktorlar(doktorlar.filter((i) => i.id === abc));
    } else {
      setTikla(true);
      setDoktorlar(doktorData);
    }
  };

  return (
    <div style={{ display: tikla ? "block" : "flex" }}>
      <div>
        <header className="header">
          <h1>HOSPİTAL APPOINTMENT SYSTEM</h1>
          <div className="dr">
            {doktorlar.map((dr) => (
              <div key={dr.id}>
                <img
                  src={dr.resim}
                  alt=""
                  width="180px"
                  height="150px"
                  className="btn"
                  style={{
                    backgroundColor: tikla === true ? "aqua" : "lightgreen",
                  }}
                  onClick={() => doktorClick(dr.id)}
                />
                <h4
                  style={{
                    backgroundColor: tikla ? "aqua" : "lightgreen",
                    borderLeft: `10px solid ${tikla ? "blue" : "green"}`,
                  }}
                >
                  {dr.doktor}
                </h4>
              </div>
            ))}
          </div>
        </header>

        {!tikla && (
          <HastaEkle
            hastalar={hastalar}
            setHastalar={setHastalar}
            doktorlar={doktorlar}
          />
        )}
      </div>

      <HastaListe
        hastalar={hastalar}
        setHastalar={setHastalar}
        doktorlar={doktorlar}
      />
    </div>
  );
};

export default Home;
