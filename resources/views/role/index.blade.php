@extends('layouts.app')

@section('content')
    <div class="container">
        <livewire:role.index />
    </div>
@endsection
@section('js')
    <script src="{{ asset('js/roles.js') }}"></script>
@endsection