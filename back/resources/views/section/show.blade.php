@extends('layouts.app')

@section('template_title')
    {{ $section->name ?? 'Show Section' }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">Show Section</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('sections.index') }}"> Back</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Name:</strong>
                            {{ $section->name }}
                        </div>
                        <div class="form-group">
                            <strong>Idiom:</strong>
                            {{ $section->idiom }}
                        </div>
                        <div class="form-group">
                            <strong>Text:</strong>
                            {{ $section->text }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
