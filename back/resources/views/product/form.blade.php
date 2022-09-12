<div class="box box-info padding-1">
    <div class="box-body">
        
        <div class="form-group">
            {{ Form::label('idiom') }}
            {{ Form::text('idiom', $product->idiom, ['class' => 'form-control' . ($errors->has('idiom') ? ' is-invalid' : ''), 'placeholder' => 'Idiom']) }}
            {!! $errors->first('idiom', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('name') }}
            {{ Form::text('name', $product->name, ['class' => 'form-control' . ($errors->has('name') ? ' is-invalid' : ''), 'placeholder' => 'Name']) }}
            {!! $errors->first('name', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('description_es') }}
            {{ Form::text('description_es', $product->description_es, ['class' => 'form-control' . ($errors->has('description_es') ? ' is-invalid' : ''), 'placeholder' => 'Description Es']) }}
            {!! $errors->first('description_es', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('description_en') }}
            {{ Form::text('description_en', $product->description_en, ['class' => 'form-control' . ($errors->has('description_en') ? ' is-invalid' : ''), 'placeholder' => 'Description En']) }}
            {!! $errors->first('description_en', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('status') }}
            {{ Form::text('status', $product->status, ['class' => 'form-control' . ($errors->has('status') ? ' is-invalid' : ''), 'placeholder' => 'Status']) }}
            {!! $errors->first('status', '<div class="invalid-feedback">:message</div>') !!}
        </div>

    </div>
    <div class="box-footer mt20">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>