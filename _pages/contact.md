---
permalink: /contact/
title: "Kontaktform"
layout: single
---
## Kontakt aufnehmen

<form action="#" method="post" aria-labelledby="contact-heading" novalidate>
  <h3 id="contact-heading">Nachricht senden</h3>
  <p><small>Mit <span aria-hidden="true">*</span> markierte Felder sind Pflichtfelder.</small></p>

  <p>
    <label for="name">Name <span aria-hidden="true">*</span><span class="visually-hidden">(Pflichtfeld)</span></label><br>
    <input type="text" id="name" name="name" required autocomplete="name" aria-required="true">
  </p>

  <p>
    <label for="email">E-Mail Adresse <span aria-hidden="true">*</span><span class="visually-hidden">(Pflichtfeld)</span></label><br>
    <input type="email" id="email" name="email" required autocomplete="email" aria-required="true" aria-describedby="email-hint">
    <br><small id="email-hint">Wir verwenden Ihre E-Mail nur zur Beantwortung Ihrer Anfrage.</small>
  </p>

  <p>
    <label for="message">Ihre Nachricht <span aria-hidden="true">*</span><span class="visually-hidden">(Pflichtfeld)</span></label><br>
    <textarea id="message" name="message" rows="6" required aria-required="true"></textarea>
  </p>

  <p>
    <input type="checkbox" id="privacy" name="privacy" required aria-required="true">
    <label for="privacy">
      Ich habe die <a href="/privacy_policy/">Datenschutzerklärung</a> gelesen
      und stimme der Verarbeitung meiner Daten zur Beantwortung der Anfrage zu.
    </label>
  </p>

  <button type="submit" class="btn btn--primary">Nachricht senden</button>
</form>

<p><small>
  Bitte beachten: Dieses Formular dient nur als Demonstration im Rahmen einer
  Lehrveranstaltung. Es werden keine Daten verarbeitet.
</small></p>