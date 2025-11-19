import { Helmet } from 'react-helmet-async';

/**
 * SEO Component für e-Autowelt
 * 
 * Verwaltet alle SEO-relevanten Meta Tags für jede Seite:
 * - Title & Description
 * - Canonical Links
 * - Open Graph (Facebook, LinkedIn)
 * - Twitter Cards
 * - Structured Data (JSON-LD)
 * - Keywords & Robots
 * 
 * @param {string} title - Seiten-Title (max. 60 Zeichen)
 * @param {string} description - Meta Description (max. 160 Zeichen)
 * @param {string} canonicalPath - Pfad für Canonical URL (z.B. "/ratgeber/kaufberatung")
 * @param {string} keywords - SEO Keywords, komma-getrennt (optional)
 * @param {string} ogImage - Pfad zum Open Graph Bild (1200x630px empfohlen)
 * @param {string} ogType - Open Graph Type ("website" oder "article")
 * @param {string} publishedDate - Veröffentlichungsdatum (ISO format, nur für Artikel)
 * @param {string} modifiedDate - Letzte Änderung (ISO format, nur für Artikel)
 */
export default function SEO({ 
  title, 
  description, 
  canonicalPath,
  keywords = '',
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  publishedDate,
  modifiedDate
}) {
  const baseUrl = 'https://e-autowelt.com';
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  const fullOgImage = `${baseUrl}${ogImage}`;

  // Structured Data für Artikel (JSON-LD)
  const articleSchema = ogType === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullOgImage,
    "author": {
      "@type": "Organization",
      "name": "e-Autowelt",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "e-Autowelt",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo.png`,
        "width": 250,
        "height": 60
      }
    },
    "datePublished": publishedDate || new Date().toISOString(),
    "dateModified": modifiedDate || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  } : null;

  // Structured Data für Website (JSON-LD)
  const websiteSchema = ogType === 'website' ? {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "e-Autowelt",
    "url": baseUrl,
    "description": "Elektroauto Ratgeber, Kostenrechner und aktuelle Informationen zur Elektromobilität in Deutschland",
    "publisher": {
      "@type": "Organization",
      "name": "e-Autowelt"
    }
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="de" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical Link - WICHTIG für Duplicate Content Vermeidung */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="e-Autowelt" />
      <meta property="og:locale" content="de_DE" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="e-Autowelt" />
      <meta name="language" content="de" />
      <meta name="geo.region" content="DE" />
      <meta name="geo.placename" content="Deutschland" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Favicon & App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Preconnect für Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data (JSON-LD) */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      
      {websiteSchema && (
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      )}
    </Helmet>
  );
}
