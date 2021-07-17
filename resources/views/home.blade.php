@extends('layouts.app')

@section('content')
    <div class="container">
        <livewire:user.index />
    </div>
@endsection
@section('js')
    <script src="{{ asset('js/users.js') }}"></script>
@endsection