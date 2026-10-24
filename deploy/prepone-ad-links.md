# PrepOne ad links: direct-to-Play vs landing page test

Run both as separate ad sets with the same creative, audience and budget. Compare **cost per install in Play Console**
(Acquisition > User acquisition, filter by the utm_medium below), not link clicks.

## Arm A: straight to Google Play
Use as the ad's Website URL. Meta fills the `{{...}}` macros per click.

```
https://play.google.com/store/apps/details?id=com.solviq.prepone&referrer=utm_source%3Dmeta%26utm_medium%3Dpaid_direct%26utm_campaign%3D{{campaign.id}}%26utm_content%3D{{ad.id}}%26utm_term%3D{{adset.id}}
```

Static version for the current campaign (120252647466780494), if macros are not accepted:

```
https://play.google.com/store/apps/details?id=com.solviq.prepone&referrer=utm_source%3Dmeta%26utm_medium%3Dpaid_direct%26utm_campaign%3D120252647466780494%26utm_content%3Ddirect
```

The whole `referrer` value must stay URL-encoded (`%3D` for `=`, `%26` for `&`), otherwise Play drops everything after the first `&`.

## Arm B: lightweight landing page
`/prepone/download` is now the static landing page (`public/prepone/download/index.html`, no React). The old test URL `/prepone/go` 301-redirects to it with the query string kept.

Website URL:

```
https://solviq.in/prepone/download
```

URL parameters field in Meta Ads Manager:

```
utm_source={{site_source_name}}&utm_medium=paid_lp&utm_campaign={{campaign.id}}&utm_content={{ad.id}}&utm_term={{adset.id}}
```

The page forwards those utm_* values (plus a `click_id`) into the Play `referrer`, so Play Console shows `paid_lp` vs `paid_direct`.

## Reading the results
- Play Console: installs per `utm_medium` (`paid_direct` vs `paid_lp`).
- Landing-page funnel from nginx: `deploy/ad-test-report.sh` (run on the VPS).
- Website buttons (PrepOne pages, About) go straight to Play with `utm_medium=prepone_page`; each click is logged to nginx as `e=site_play_click&v=site&pos=<placement>`.
- Note: arm A cannot be seen in nginx at all. Meta's click count for that ad set is the only top-of-funnel number.
