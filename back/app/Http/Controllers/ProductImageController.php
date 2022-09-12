<?php

namespace App\Http\Controllers;

use App\Models\ProductImage;
use Illuminate\Http\Request;

/**
 * Class ProductImageController
 * @package App\Http\Controllers
 */
class ProductImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productImages = ProductImage::paginate();

        return view('product-image.index', compact('productImages'))
            ->with('i', (request()->input('page', 1) - 1) * $productImages->perPage());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $productImage = new ProductImage();
        return view('product-image.create', compact('productImage'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(ProductImage::$rules);

        $productImage = ProductImage::create($request->all());

        return redirect()->route('product-images.index')
            ->with('success', 'ProductImage created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $productImage = ProductImage::find($id);

        return view('product-image.show', compact('productImage'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $productImage = ProductImage::find($id);

        return view('product-image.edit', compact('productImage'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  ProductImage $productImage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductImage $productImage)
    {
        request()->validate(ProductImage::$rules);

        $productImage->update($request->all());

        return redirect()->route('product-images.index')
            ->with('success', 'ProductImage updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $productImage = ProductImage::find($id)->delete();

        return redirect()->route('product-images.index')
            ->with('success', 'ProductImage deleted successfully');
    }
}
