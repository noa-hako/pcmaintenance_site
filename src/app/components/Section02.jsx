import React from "react";
import styles from "./Section.module.css";
import SecTitle from "./SecTitle";

export default function Section02() {
  return (
    <div className={styles.wrapper}>
      <SecTitle title="よくある質問" />
      <div>
        <ul className={styles.qalist}>
          <li>
            <h2>パソコン修理には何日ぐらいかかりますか？</h2>
            <p>
              通常3日～2週間程度となります。修理箇所やパーツの入手性、修理が混み合う時期などは時間がかかる場合がございます。別途ご案内いたします。
            </p>
          </li>
          <li>
            <h2>修理を依頼すると、パソコンのデータは消えてしまいますか？</h2>
            <p>
              メーカー修理と違い、可能な限りお客様の大切なデータを残したまま修理させていただきます。また、修理金額が折り合わない場合はデータだけ救出することも出来ますのでまず無料相談いただければ、どういう方法が早く、安くできるかご説明いたします。
            </p>
          </li>
          <li>
            <h2>パソコン修理後の保証期間は、どのくらいになりますか？</h2>
            <p>
              交換部品・パーツは最長6ヶ月の保証で、修理作業に関しては2週間の保証とします。ただし水濡れ・液体浸入や落下など特殊な故障は除ます。
            </p>
          </li>
          <li>
            <h2>Macの修理も対応していますか？</h2>
            <p>
              Windowsはもちろん、Macの修理も対応しています。アップルストアや他店で断られた修理もお任せ下さい。Macの料金表と簡単見積はコチラからどうぞ。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
