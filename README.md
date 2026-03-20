# Ingestion Tests

Test repository for validating UI behavior during code ingestion.

## Test: Long Filepaths

This repo contains files with intentionally long directory paths and filenames to test UI line-wrapping behavior when displaying file trees and code references.

### Path length tiers

| Tier | Example filepath | Approx chars |
|------|-----------------|--------------|
| Short | `src/components/dashboard/DashboardWidget.tsx` | ~46 |
| Medium | `src/modules/authentication/.../GoogleWorkspaceOAuthProviderService.ts` | ~105 |
| Long | `src/modules/enterprise-resource-planning/.../StockReconciliationAutomatedReportingService.ts` | ~160 |
| Very Long | `src/modules/business-intelligence-analytics-platform/.../CustomDateRangeFilterAndSegmentationSelectorComponent.tsx` | ~210 |
| Extreme | `src/modules/artificial-intelligence-and-machine-learning-operations/.../MultiLanguageSentimentAnalysisTranslationQualityAssuranceValidationFrameworkService.ts` | ~280 |
