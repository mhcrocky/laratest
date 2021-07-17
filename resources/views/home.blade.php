@extends('layouts.app')

@section('content')
    <div class="container">
        <livewire:user.index />
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="user-modal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <livewire:user.form>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('js')
    <script src="{{ asset('js/users.js') }}"></script>
@endsection