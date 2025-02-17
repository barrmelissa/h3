---
id: h3ToGeoBoundaryDesc
title: Generate the cell boundary in latitude/longitude coordinates of an H3Index cell
sidebar_label: Generate the cell boundary in latitude/longitude coordinates of an H3Index cell
slug: /core-library/h3ToGeoBoundaryDesc
---

This operation is performed by function `h3ToGeoBoundary`. See the comments in the function source code for more detail.

The conversion is performed as a series of coordinate system conversions described below. See the page [Coordinate Systems used by the H3 Core Library](/docs/core-library/coordsystems) for more information on each of these coordinate systems.

1. We note that the cell vertices are the center points of cells in an aperture 3 grid one resolution finer than the cell resolution, which we term a *substrate* grid. We precalculate the substrate *ijk* coordinates of a cell with *ijk* coordinates (0,0,0), adding additional aperture 3 and aperture 7 (if required, by Class III cell grid) substrate grid resolutions as required to transform the vertex coordinates into a Class II substrate grid.

<div align="center">
  <img height="300" src="/images/substrate3.png" />
</div>

2. The function `_faceIjkToGeoBoundary` calculates the *ijk* coordinates of the cell center point in the appropriate substrate grid (determined in the last step), and each of the substrate vertices is translated using the cell center point *ijk*. Each vertex *ijk* is then transformed onto the appropriate face and *Hex2d* coordinate system using the approach taken in [finding a cell center point](/docs/core-library/h3ToGeoDesc). If adjacent vertices lie on different icosahedron faces a point is introduced at the intersection of the cell edge and icosahedron face edge.
3. The *Hex2d* coordinates are then converted to latitude/longitude using `_hex2dToGeo`.
