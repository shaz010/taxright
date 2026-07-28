# TaxRight 2024

> Free, beautiful, and brutally accurate US federal tax preparation — right in your browser.

**Live app → [shaz010.github.io/taxright](https://shaz010.github.io/taxright)**

No account. No paywall. No data leaves your device.

---

## What it covers

TaxRight handles all three major taxpayer situations in a single, guided flow:

| User type | Key features |
|---|---|
| **W-2 employee** | Multiple jobs, withholding, investment income, rental income |
| **Freelancer / 1099** | Schedule C, SE tax, QBI deduction, 1099-K wizard |
| **Small business owner** | Full Schedule C, home office (simplified or actual), vehicle deduction |

### All 2024 IRS figures — no shortcuts

- Tax brackets for all 5 filing statuses
- Standard deductions: $14,600 / $29,200 / $21,900
- LTCG thresholds, EITC tables, CTC phase-outs, QBI income limits
- SE tax base (92.35%), SS wage cap ($168,600), vehicle rate (67¢/mile)

### Features you won't find elsewhere (free)

- **Audit risk score** — flags specific IRS triggers: high meal ratios, 100% vehicle use, Schedule C losses, large charitable deductions
- **Live refund counter** — animates in real time as you type
- **Standard vs. itemized gap** — shows exactly how much you'd gain by itemizing
- **1099-K wizard** — classifies payment app income correctly
- **Quarterly estimate planner** — exact 2025 due dates with safe-harbor amounts
- **Session save / restore** — export your return as JSON, import it later

---

## Tech

Single-file HTML app — no build step, no dependencies, no backend.

```
index.html   ← the entire app (HTML + CSS + JS, ~2,500 lines)
```

External CDN resources only:
- [Chart.js](https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js) — waterfall and bracket charts
- [Google Fonts — Inter](https://fonts.googleapis.com) — typography

---

## Roadmap

- [ ] State income tax module
- [ ] PDF export of completed return summary  
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Mobile layout refinements
- [ ] Multi-year comparison (2023 vs 2024)
- [ ] Form 8829 (home office) print-ready output
- [ ] CPA review request flow

---

## Contributing

PRs welcome. Before submitting:

1. Verify any changed IRS figures against the official [IRS Publication 505](https://www.irs.gov/publications/p505) or relevant pub
2. Test the full 7-step flow for all three user types
3. Check dark mode and print styles

---

## Disclaimer

TaxRight is an educational tool, not licensed tax advice. Verify critical figures with a qualified tax professional or the IRS directly before filing.

---

## License

MIT © 2024 Shaz
