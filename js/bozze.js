export function creaBozza(r) {
	// 🔴 Esperienza negativa (1-4)
	if (r.voto <= 4) {
		return `Gentile ${r.ospite},

grazie per averci raccontato il suo soggiorno presso ${r.struttura}. Ci dispiace sinceramente che l'esperienza non sia stata all'altezza delle sue aspettative.

Abbiamo condiviso la sua segnalazione con il team operativo, affinché i problemi riscontrati vengano verificati e risolti al più presto.

Ci auguriamo di poterla accogliere di nuovo, per dimostrarle la qualità del servizio che desideriamo offrire.

Cordiali saluti`;
	}

	// 🟡 Esperienza media (5-7)
	if (r.voto <= 7) {
		return `Gentile ${r.ospite},

la ringraziamo per il tempo dedicato alla sua recensione su ${r.struttura}. Siamo contenti che alcuni aspetti del soggiorno le siano piaciuti, e prendiamo nota con attenzione dei punti da migliorare.

Durante i prossimi soggiorni non esiti a contattarci in qualsiasi momento: il nostro team è a disposizione per intervenire subito.

Speriamo di rivederla presto e di offrirle un'esperienza ancora migliore.

Cordiali saluti`;
	}

	// 🟢 Esperienza positiva (8-10)
	return `Gentile ${r.ospite},

grazie di cuore per le sue belle parole! Siamo felici che si sia trovato bene presso ${r.struttura}.

Il suo apprezzamento è per noi un grande incoraggiamento a continuare a lavorare con la stessa cura.

Sarà un piacere accoglierla di nuovo in uno dei nostri appartamenti.

Cordiali saluti`;
}
