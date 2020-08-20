import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import SectionIndexPagePreview from './preview-templates/SectionIndexPagePreview'
import NavbarPreview from './preview-templates/NavbarPreview'
import ModalProjectPreview from './preview-templates/ModalProjectPreview'
// hook styled component
import withStyledComponents from './hooks/withStyledComponents'
const WidgetColor = require('netlify-cms-widget-color/dist/es/color')

CMS.registerWidget('color', WidgetColor.default.Control)

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('section-index-page', withStyledComponents(SectionIndexPagePreview))
CMS.registerPreviewTemplate('section-rapport', withStyledComponents(SectionIndexPagePreview))
CMS.registerPreviewTemplate('navbar', withStyledComponents(NavbarPreview))
CMS.registerPreviewTemplate('modalProject', withStyledComponents(ModalProjectPreview))
