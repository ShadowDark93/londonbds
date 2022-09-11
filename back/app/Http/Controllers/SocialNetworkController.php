<?php

namespace App\Http\Controllers;

use App\Models\socialNetwork;
use App\Http\Requests\StoresocialNetworkRequest;
use App\Http\Requests\UpdatesocialNetworkRequest;

class SocialNetworkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoresocialNetworkRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoresocialNetworkRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\socialNetwork  $socialNetwork
     * @return \Illuminate\Http\Response
     */
    public function show(socialNetwork $socialNetwork)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\socialNetwork  $socialNetwork
     * @return \Illuminate\Http\Response
     */
    public function edit(socialNetwork $socialNetwork)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatesocialNetworkRequest  $request
     * @param  \App\Models\socialNetwork  $socialNetwork
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatesocialNetworkRequest $request, socialNetwork $socialNetwork)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\socialNetwork  $socialNetwork
     * @return \Illuminate\Http\Response
     */
    public function destroy(socialNetwork $socialNetwork)
    {
        //
    }
}
