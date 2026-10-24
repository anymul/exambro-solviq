#!/usr/bin/env bash
# Landing-page funnel for /prepone/download (the static page; its beacons carry v=lp). Run on the VPS: bash ad-test-report.sh
# Ignores test traffic (camp=verify). Unique visitors are counted by click id (cid).
L=/var/log/nginx
E=$L/prepone_events.log
uniq_cid() { grep "v=lp" "$E" | grep -v "camp=verify" | grep "e=$1&" | grep -o 'cid=[a-z0-9]*' | sort -u | wc -l; }

echo "page hits (GET /prepone/download, excl. verify/curl): $(grep 'GET /prepone/download' $L/prepone_download.log | grep -v -E 'verify|curl/' | wc -l)"
printf "%-20s %s\n" "event" "unique visitors"
for e in landing_view scroll cta_click cta_click_stalled intent_click chrome_click ios_blocked left_page; do
    printf "%-20s %s\n" "$e" "$(uniq_cid $e)"
done
echo
echo "in-app browser share of landings: $(grep 'v=lp' $E | grep -v verify | grep 'e=landing_view&' | grep -c 'iab=1') iab / $(uniq_cid landing_view) total"
echo "CTA position:"; grep 'v=lp' $E | grep -v verify | grep 'e=cta_click&' | grep -o 'pos=[a-z]*' | sort | uniq -c
echo
echo "website buttons -> Play (site_play_click, unique):"; grep 'v=site' $E | grep -o 'cid=[a-z0-9]*' | sort -u | wc -l
grep 'v=site' $E | grep -o 'pos=[a-z0-9_]*' | sort | uniq -c | sort -rn | head -8
