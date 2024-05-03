import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const HastaListe = ({ hastalar, setHastalar, doktorlar }) => {
  console.log(doktorlar[0].doktor);
  return (
    <div>
      {hastalar.map((hasta) => {
        return (
          <div key={hasta.id}>
            {doktorlar.length === 4 ? (
              <div
                className={hasta.bittiMi ? "trueBittiStil" : "falseBitmediStil"}
                onDoubleClick={() =>
                  setHastalar(
                    hastalar.map((dizi) =>
                      dizi.id === hasta.id
                        ? { ...dizi, bittiMi: !dizi.bittiMi }
                        : dizi
                    )
                  )
                }
              >
                <div>
                  <h2>{hasta.text}</h2>
                  <h4>{hasta.day}</h4>
                  <h3>{hasta.doktorum}</h3>
                </div>
                <FaTimesCircle
                  style={{ color: "red" }}
                  onClick={() =>
                    setHastalar(hastalar.filter((a) => a.id !== hasta.id))
                  }
                />
              </div>
            ) : (
              doktorlar[0].doktor === hasta.doktorum && (
                <div
                  className={
                    hasta.bittiMi ? "trueBittiStil" : "falseBitmediStil"
                  }
                  onDoubleClick={() =>
                    setHastalar(
                      hastalar.map((dizi) =>
                        dizi.id === hasta.id
                          ? { ...dizi, bittiMi: !dizi.bittiMi }
                          : dizi
                      )
                    )
                  }
                >
                  <div>
                    <h2>{hasta.text}</h2>
                    <h4>{hasta.day}</h4>
                    <h3>{hasta.doktorum}</h3>
                  </div>
                  <FaTimesCircle
                    style={{ color: "red" }}
                    onClick={() =>
                      setHastalar(hastalar.filter((a) => a.id !== hasta.id))
                    }
                  />

                </div>
              )
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HastaListe;
