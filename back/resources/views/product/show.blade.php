@extends('layouts.app')

@section('template_title')
    {{ $product->name ?? 'Show Product' }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">Show Product</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('products.index') }}"> Back</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Idiom:</strong>
                            {{ $product->idiom }}
                        </div>
                        <div class="form-group">
                            <strong>Name:</strong>
                            {{ $product->name }}
                        </div>
                        <div class="form-group">
                            <strong>Description Es:</strong>
                            {{ $product->description_es }}
                        </div>
                        <div class="form-group">
                            <strong>Description En:</strong>
                            {{ $product->description_en }}
                        </div>
                        <div class="form-group">
                            <strong>Status:</strong>
                            {{ $product->status }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
