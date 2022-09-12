@extends('layouts.app')

@section('template_title')
    Social Network
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                {{ __('Social Network') }}
                            </span>

                             <div class="float-right">
                                <a href="{{ route('social-networks.create') }}" class="btn btn-primary btn-sm float-right"  data-placement="left">
                                  {{ __('Create New') }}
                                </a>
                              </div>
                        </div>
                    </div>
                    @if ($message = Session::get('success'))
                        <div class="alert alert-success">
                            <p>{{ $message }}</p>
                        </div>
                    @endif

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead class="thead">
                                    <tr>
                                        <th>No</th>
                                        
										<th>Name</th>
										<th>Url</th>
										<th>Logo</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($socialNetworks as $socialNetwork)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
											<td>{{ $socialNetwork->name }}</td>
											<td>{{ $socialNetwork->url }}</td>
											<td>{{ $socialNetwork->logo }}</td>

                                            <td>
                                                <form action="{{ route('social-networks.destroy',$socialNetwork->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('social-networks.show',$socialNetwork->id) }}"><i class="fa fa-fw fa-eye"></i> Show</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('social-networks.edit',$socialNetwork->id) }}"><i class="fa fa-fw fa-edit"></i> Edit</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i> Delete</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {!! $socialNetworks->links() !!}
            </div>
        </div>
    </div>
@endsection
